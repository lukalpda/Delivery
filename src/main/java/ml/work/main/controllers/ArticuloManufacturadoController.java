package ml.work.main.controllers;

import java.util.ArrayList;

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

import ml.work.main.dtos.ArticuloManufacturadoDTO;
import ml.work.main.service.ArticuloManufacturadoService;

@Controller
@RestController
@CrossOrigin(origins = "*") 
@RequestMapping(path = "api/v1/manufacturados")
public class ArticuloManufacturadoController implements ObjectController<ArticuloManufacturadoDTO>{

	private ArticuloManufacturadoService articuloManufacturadoService;

	public ArticuloManufacturadoController(ArticuloManufacturadoService articuloManufacturadoService) {
		this.articuloManufacturadoService = articuloManufacturadoService;
	}
	
	@Override
	@CrossOrigin("*")
	@GetMapping(path = "/")
	public ArrayList<ArticuloManufacturadoDTO> getAll() {
		return ResponseEntity.status(200).body(articuloManufacturadoService.getAll()).getBody();
	}
	
	
	@Override
	@GetMapping(path = "/{id}")
	public ArticuloManufacturadoDTO getOne(@PathVariable int id) {
		return ResponseEntity.status(200).body(articuloManufacturadoService.getOne(id)).getBody();
	}
	
	
	@Override
	@PostMapping("/")
	public ResponseEntity save(@RequestBody ArticuloManufacturadoDTO body) {
		ArticuloManufacturadoDTO temp = articuloManufacturadoService.save(body);

		if (temp.getId_artManuf() != 0) {
			return ResponseEntity.status(201).body(temp);
		} else {
			return ResponseEntity.status(400).body("{'error' : 'bad request'}");
		}
	}
	
	@Override
	@PutMapping("/{id}")
	public ResponseEntity updateEntity(@RequestBody ArticuloManufacturadoDTO t, @PathVariable int id) {
		return ResponseEntity.status(201).body(articuloManufacturadoService.update(t, id));
	}

	@Override
	@DeleteMapping("/{id}")
	public ResponseEntity deleteEntity(@PathVariable int id) {
		boolean det = articuloManufacturadoService.delete(id);

		if (det) {
			return ResponseEntity.status(204).body("'Message' : 'Successful Delete'");
		} else {
			return ResponseEntity.status(400).body("'Message' . 'Unsuccessful delete'");
		}
	}

}
