package com.xiomara.paymetbackend.model;

import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.springframework.context.annotation.EnableMBeanExport;

import java.time.YearMonth;

@Data
public class Card {
    @NotEmpty(message = "Cardholder's name must be added")
    private String name;

    @NotEmpty(message = "Card number must be added")
    private String number;

    @FutureOrPresent(message = "Invalid expiry date")
    @NotNull (message = "Expiry date must be added")
    private YearMonth expiring;

    @NotEmpty(message = "CVV must be added")
    private String cvv;

}
