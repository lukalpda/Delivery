package ml.work.main.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import ml.work.main.dtos.PreciosDTO;
import ml.work.main.entities.Precios;
import ml.work.main.repositories.PreciosRepository;

@Service
public class PreciosService implements ObjectService<PreciosDTO> {

	private PreciosRepository preciosRepository;
		
	public PreciosService(PreciosRepository preciosRepository) {
		this.preciosRepository = preciosRepository;
	}

	@Override
	public List<PreciosDTO> getAll() {
		List<PreciosDTO> resultDtos = new ArrayList<>();
		
		for (Precios precio : preciosRepository.findAll()) {
			
			PreciosDTO temp = new PreciosDTO();
			
			temp.setFechaFin(precio.getFechaFin());
			temp.setFechaInicio(precio.getFechaInicio());
			temp.setId_precio(precio.getId_precio());
			temp.setPrecio(precio.getPrecio());
			temp.setPrecioItem(precio.getPrecioItem());
			
			resultDtos.add(temp);
		}
		return resultDtos;
	}

	@Override
	public PreciosDTO getOne(int id) {
		Optional<Precios> temp = preciosRepository.findById(id);
		
		PreciosDTO result = new PreciosDTO();
		
		try {
			Precios resultBD= temp.get();
			
			result.setFechaFin(resultBD.getFechaFin());
			result.setFechaInicio(resultBD.getFechaInicio());
			result.setId_precio(resultBD.getId_precio());
			result.setPrecio(resultBD.getPrecio());
			result.setPrecioItem(resultBD.getPrecioItem());
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return result;
	}

	@Override
	public PreciosDTO save(PreciosDTO t) {
		Precios guardado = new Precios();
		
		guardado.setFechaFin(t.getFechaFin());
		guardado.setFechaInicio(t.getFechaInicio());
		guardado.setPrecio(t.getPrecio());
		guardado.setPrecioItem(t.getPrecioItem());
		guardado.setPrecioPlato(t.getPrecioPlato());
		
		try {
			preciosRepository.save(guardado);
			t.setId_precio(guardado.getId_precio());
		} catch (Exception e) {
			System.out.println("Error al guardar");
		}
		
		return t;
	}

	@Override
	public PreciosDTO update(PreciosDTO t, int id) {
		Optional <Precios> pOptional = preciosRepository.findById(id);
		
		Precios temp = new Precios();
		
		try {
			temp = pOptional.get();
			
			temp.setFechaFin(t.getFechaFin());
			temp.setFechaInicio(t.getFechaInicio());
			temp.setPrecio(t.getPrecio());
			temp.setPrecioItem(t.getPrecioItem());
			temp.setPrecioPlato(t.getPrecioPlato());
			
			preciosRepository.save(temp);
			t.setId_precio(temp.getId_precio());
			
		} catch (Exception e) {
			System.out.println("No existe");
		}
		return t;
	}

	@Override
	public boolean delete(int id) {
		try {
			preciosRepository.deleteById(id);
		} catch (Exception e) {
			return false;
		}
		
		return true;
	}

}
