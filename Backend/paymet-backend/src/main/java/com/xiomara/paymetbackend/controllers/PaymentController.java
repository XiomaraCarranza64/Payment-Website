package com.xiomara.paymetbackend.controllers;

import com.xiomara.paymetbackend.model.Card;
import com.xiomara.paymetbackend.model.Message;
import com.xiomara.paymetbackend.services.CardService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
@CrossOrigin("*")
public class PaymentController {

    @Autowired
    CardService cardService;

    @PostMapping("/payment")
    public ResponseEntity<?> paymentValidation(@RequestBody @Valid Card card, BindingResult validations) {
        if (validations.hasErrors()) {
            String errors = validations.getAllErrors()
                    .stream()
                    .map(error -> error.getDefaultMessage())
                    .reduce((msg1, msg2) -> msg1 + ", " + msg2)
                    .orElse("Unknown error");

            return new ResponseEntity<>(new Message(errors), HttpStatus.BAD_REQUEST);

        }

        if (!cardService.cvvValidation(card))
            return new ResponseEntity<>(new Message("Invalid CVV"), HttpStatus.BAD_REQUEST);

        if (!cardService.panValidation(card))
            return new ResponseEntity<>(new Message("Invalid number"), HttpStatus.BAD_REQUEST);

        if (!cardService.luhnValidation(card))
            return new ResponseEntity<>(new Message("Invalid card"), HttpStatus.BAD_REQUEST);

        return new ResponseEntity<>(new Message("Valid Credit Card"), HttpStatus.OK);
    }


}
