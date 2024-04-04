package com.d3n15tecback.controller;

import com.d3n15tecback.dto.SearchCriteria;
import com.d3n15tecback.model.LabelValue;
import com.d3n15tecback.service.FiltroService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/filtros")
public class FiltroController {

    @Autowired
    private FiltroService filtroService;

    @PostMapping("/usuarios")
    public ResponseEntity<List<LabelValue>> listUsuarios(@RequestBody List<SearchCriteria> params) {
        return ResponseEntity.ok(filtroService.filtroUsuarios());
    }
}
