package com.xiomara.paymetbackend.services;

import com.xiomara.paymetbackend.model.Card;

public interface CardService {
    boolean cvvValidation(Card newCard);
    boolean panValidation(Card newCard);
    boolean luhnValidation (Card newCard);

}
