package ml.work.main.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import ml.work.main.dtos.ComandaDTO;
import ml.work.main.entities.Comanda;
import ml.work.main.repositories.ComandaRepository;

@Service
public class ComandaService implements ObjectService<ComandaDTO>{

	
	private ComandaRepository comandaRepository;

	public ComandaService(ComandaRepository comandaRepository) {
		this.comandaRepository = comandaRepository;
	}
	
	@Override
	public List<ComandaDTO> getAll() {
		ArrayList<ComandaDTO> result = new ArrayList<>();
		
		for(Comanda comanda: comandaRepository.findAll()) {
			ComandaDTO temp = new ComandaDTO();
			
			temp.setId_comanda(comanda.getId_comanda());
			temp.setFecha(comanda.getFecha());
			temp.setHora(comanda.getHora());
			temp.setNombre_comprobante(comanda.getNombre_comprobante());
			temp.setDetalleFactura(comanda.getDetalleFactura());
			temp.setFechaAnulado(comanda.getFechaAnulado());
			
			result.add(temp);
		}
		return result;
	}

	@Override
	public ComandaDTO getOne(int id) {
		Optional<Comanda> temp = comandaRepository.findById(id);
		
		ComandaDTO result = new ComandaDTO();
		
		try {
			Comanda resultBD = temp.get();
			
			result.setId_comanda(resultBD.getId_comanda());
			result.setNombre_comprobante(resultBD.getNombre_comprobante());
			result.setFecha(resultBD.getFecha());
			result.setHora(resultBD.getHora());
			result.setDetalleFactura(resultBD.getDetalleFactura());
			result.setFechaAnulado(resultBD.getFechaAnulado());
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return result;
	}

	@Override
	public ComandaDTO save(ComandaDTO t) {
		Comanda guardado = new Comanda();
		
		guardado.setDetalleFactura(t.getDetalleFactura());
		guardado.setFecha(t.getFecha());
		guardado.setHora(t.getHora());
		guardado.setId_comanda(t.getId_comanda());
		guardado.setNombre_comprobante(t.getNombre_comprobante());
		guardado.setFechaAnulado(t.getFechaAnulado());
		
		try {
			comandaRepository.save(guardado);
			t.setId_comanda(guardado.getId_comanda());
		} catch (Exception e) {
			System.out.println("Error al guardar");
		}
		
		return t;
	}

	@Override
	public ComandaDTO update(ComandaDTO t, int id) {
		Optional<Comanda> pOptional = comandaRepository.findById(id);
		
		Comanda temp = new Comanda();
		
		try {
			temp = pOptional.get();
			
			temp.setDetalleFactura(t.getDetalleFactura());
			temp.setFecha(t.getFecha());
			temp.setHora(t.getHora());
			temp.setId_comanda(t.getId_comanda());
			temp.setNombre_comprobante(t.getNombre_comprobante());
			temp.setFechaAnulado(t.getFechaAnulado());
			
			comandaRepository.save(temp);
			t.setId_comanda(temp.getId_comanda());
		} catch (Exception e) {
			System.out.println("No existe");
		}
		return t;
	}

	@Override
	public boolean delete(int id) {
		try {
			comandaRepository.deleteById(id);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

}
