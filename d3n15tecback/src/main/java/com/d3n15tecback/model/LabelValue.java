package com.d3n15tecback.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigInteger;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LabelValue {

    private String value;
    private String label;

    public LabelValue(BigInteger bigInteger, String label) {
        this.value = String.valueOf(bigInteger);
        this.label = label;
    }
}
