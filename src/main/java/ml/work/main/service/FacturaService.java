package ml.work.main.service;

import java.util.ArrayList;
import java.util.Optional;


import org.springframework.stereotype.Service;

import ml.work.main.dtos.FacturaDTO;
import ml.work.main.entities.Factura;
import ml.work.main.repositories.FacturaRepository;

@Service
public class FacturaService implements ObjectService<FacturaDTO> {

	private FacturaRepository facturaRepository;

	public FacturaService(FacturaRepository facturaRepository) {
		this.facturaRepository = facturaRepository;
	}
	
	@Override
	public ArrayList<FacturaDTO> getAll() {

		ArrayList<FacturaDTO> result = new ArrayList<>();

		for (Factura factura : facturaRepository.findAll()) {
			FacturaDTO temp = new FacturaDTO();

			temp.setNumFactura(factura.getNumFactura());
			temp.setEsEfectivo(factura.isEsEfectivo());
			temp.setTotal(factura.getTotal());
			temp.setFecha(factura.getFecha());
			temp.setHora(factura.getHora());
			temp.setNombre_comprobante(factura.getNombre_comprobante());
			temp.setDetalleFactura(factura.getDetalleFactura());
			temp.setCliente(factura.getCliente());
			temp.setFechaAnulado(factura.getFechaAnulado());

			result.add(temp);
		}

		return result;
				
	}

	@Override
	public FacturaDTO getOne(int id) {		
		Optional<Factura> temp = facturaRepository.findById(id); // Optional: puede o no existir por ese Id. de no
																	// existir, no se crea el objeto
		FacturaDTO result = new FacturaDTO();

		try {

			Factura resultBD = temp.get();

			result.setNumFactura(resultBD.getNumFactura());
			result.setEsEfectivo(resultBD.isEsEfectivo());
			result.setTotal(resultBD.getTotal());
			result.setFecha(resultBD.getFecha());
			result.setHora(resultBD.getHora());
			result.setNombre_comprobante(resultBD.getNombre_comprobante());
			result.setCliente(resultBD.getCliente());
			result.setFechaAnulado(result.getFechaAnulado());

		} catch (Exception e) {
			System.out.println(e.getMessage());

		}
		return result;
	}

	@Override
	public FacturaDTO save(FacturaDTO body) {
		Factura guardado = new Factura();

		guardado.setFecha(body.getFecha());
		guardado.setHora(body.getHora());
		guardado.setEsEfectivo(body.isEsEfectivo());
		guardado.setNombre_comprobante(body.getNombre_comprobante());
		guardado.setTotal(body.getTotal());
		guardado.setDetalleFactura(body.getDetalleFactura());
		guardado.setCliente(body.getCliente());
		guardado.setFechaAnulado(body.getFechaAnulado());

		try {
			facturaRepository.save(guardado);
			body.setNumFactura(guardado.getNumFactura());
		} catch (Exception e) {
			System.out.println("Error al guardar");
		}
		return body;
	}

	@Override
	public FacturaDTO update(FacturaDTO t, int id) {
		Optional<Factura> pOptional = facturaRepository.findById(id);

		Factura temp = new Factura();

		try {
			temp = pOptional.get();

			temp.setDetalleFactura(t.getDetalleFactura());
			temp.setFecha(t.getFecha());
			temp.setHora(t.getHora());
			temp.setEsEfectivo(t.isEsEfectivo());
			temp.setNombre_comprobante(t.getNombre_comprobante());
			temp.setTotal(t.getTotal());
			temp.setCliente(t.getCliente());
			temp.setFechaAnulado(t.getFechaAnulado());
		
			facturaRepository.save(temp);
			t.setNumFactura(temp.getNumFactura());

		} catch (Exception e) {
			System.out.println("No existe");
		}
		return t;
	}

	@Override
	public boolean delete(int id) {
		try {
			facturaRepository.deleteById(id);
		}catch (Exception e) {
			return false;
		}		
		return true;
	}

}
