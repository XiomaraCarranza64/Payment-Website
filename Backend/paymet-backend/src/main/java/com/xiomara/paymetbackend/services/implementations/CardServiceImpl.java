package com.xiomara.paymetbackend.services.implementations;

import com.xiomara.paymetbackend.model.Card;
import com.xiomara.paymetbackend.services.CardService;
import org.springframework.stereotype.Service;

@Service
public class CardServiceImpl implements CardService {
    @Override
    public boolean cvvValidation(Card newCard) {


        if (newCard.getNumber().substring(0, 2).equals("37") || newCard.getNumber().substring(0, 2).equals("34")) {
            if (newCard.getCvv().length() != 4) {
                return false;
            }
        } else {
            if (newCard.getCvv().length() != 3) {
                return false;
            }

        }

        return true;
    }

    @Override
    public boolean panValidation(Card newCard) {
        if (newCard.getNumber().length() >= 16 && newCard.getNumber().length() <= 19) {
            return true;
        }
        return false;
    }

    @Override
    public boolean luhnValidation(Card newCard) {
        int n = newCard.getNumber().length();
        boolean isEven = false;
        int sum = 0;

        for (int i = n - 1; i >= 0; i--) {

            int d = Character.getNumericValue(newCard.getNumber().charAt(i));

            if (isEven) d = d * 2;

            sum += d / 10;
            sum += d % 10;

            isEven = !isEven;
        }
        return sum % 10 == 0;
    }
}
