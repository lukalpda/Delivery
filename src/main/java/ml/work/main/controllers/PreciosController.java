package ml.work.main.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ml.work.main.dtos.PreciosDTO;
import ml.work.main.service.PreciosService;

@Controller
@RestController
@CrossOrigin(origins = "*") 
@RequestMapping(path = "api/v1/precios")
public class PreciosController implements ObjectController<PreciosDTO>{

	private PreciosService preciosService;	
	
	public PreciosController(PreciosService preciosService) {
		this.preciosService = preciosService;
	}
	

	@Override
	@CrossOrigin("*")
	@GetMapping(path = "/")
	public List<PreciosDTO> getAll() {
		return ResponseEntity.status(200).body(preciosService.getAll()).getBody();
	}

	@Override
	@GetMapping(path = "/{id}")
	public PreciosDTO getOne(int id) {
		return ResponseEntity.status(200).body(preciosService.getOne(id)).getBody();
	}

	@Override
	@PostMapping("/")
	public ResponseEntity save(PreciosDTO body) {
		PreciosDTO temp = preciosService.save(body);

		if (temp.getId_precio() != 0) {
			return ResponseEntity.status(201).body(temp);
		} else {
			return ResponseEntity.status(400).body("{'error' : 'bad request'}");
		}
	}

	@Override
	@PutMapping("/{id}")
	public ResponseEntity updateEntity(PreciosDTO t, int id) {
		return ResponseEntity.status(201).body(preciosService.update(t, id));
	}

	@Override
	@DeleteMapping("/{id}")
	public ResponseEntity deleteEntity(int id) {
		boolean det = preciosService.delete(id);

		if (det) {
			return ResponseEntity.status(204).body("'Message' : 'Successful Delete'");
		} else {
			return ResponseEntity.status(400).body("'Message' . 'Unsuccessful delete'");
		}
	}
}
