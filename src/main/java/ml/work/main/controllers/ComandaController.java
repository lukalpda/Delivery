package ml.work.main.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ml.work.main.dtos.ComandaDTO;
import ml.work.main.service.ComandaService;
@Controller
@RestController
@CrossOrigin(origins = "*") 
@RequestMapping(path = "api/v1/comandas")
public class ComandaController implements ObjectController<ComandaDTO>{

	private ComandaService comandaService;

	public ComandaController(ComandaService comandaService) {
		this.comandaService = comandaService;
	}
	
	@Override
	@CrossOrigin("*")
	@GetMapping(path = "/")
	public List<ComandaDTO> getAll() {

		return ResponseEntity.status(200).body(comandaService.getAll()).getBody();
	}

	@Override
	@GetMapping(path = "/{id}")
	public ComandaDTO getOne(@PathVariable int id) {
		return ResponseEntity.status(200).body(comandaService.getOne(id)).getBody();
	}

	@Override
	@PostMapping("/")
	public ResponseEntity save(@RequestBody ComandaDTO body) {
		ComandaDTO temp = comandaService.save(body);

		if (temp.getId_comanda() != 0) {
			return ResponseEntity.status(201).body(temp);
		} else {
			return ResponseEntity.status(400).body("{'error' : 'wrong request'}");
		}
	}
	
	
	@Override
	@PutMapping("/{id}")
	public ResponseEntity updateEntity(@RequestBody ComandaDTO t, @PathVariable int id) {
		return ResponseEntity.status(201).body(comandaService.update(t, id));
	}

	@Override
	@DeleteMapping("/{id}")
	public ResponseEntity deleteEntity(@PathVariable int id) {
		boolean det = comandaService.delete(id);

		if (det) {
			return ResponseEntity.status(204).body("'Message' : 'Successful Delete'");
		} else {
			return ResponseEntity.status(400).body("'Message' . 'Unsuccessful delete'");
		}
	}

}

