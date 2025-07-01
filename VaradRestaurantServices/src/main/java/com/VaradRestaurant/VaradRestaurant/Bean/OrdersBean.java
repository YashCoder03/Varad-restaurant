package com.VaradRestaurant.VaradRestaurant.Bean;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "orders")
public class OrdersBean {

    @Id
    private String id;
    private String userId;
    private OrderedItem orderedItem[];
    private int totalAmount;
    private String address;

    
}

class OrderedItem {
    private String id;
    private String name;
    private int quantity;
    private int price;
}
