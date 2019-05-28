package ml.work.main.service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.stereotype.Service;

import ml.work.main.dtos.ArticuloManufacturadoDTO;
import ml.work.main.entities.ArticuloManufacturado;
import ml.work.main.repositories.ArticuloManufacturadoRepository;

@Service
public class ArticuloManufacturadoService implements ObjectService<ArticuloManufacturadoDTO>{

	
	private ArticuloManufacturadoRepository articuloManufacturadoRepository;

	public ArticuloManufacturadoService(ArticuloManufacturadoRepository articuloManufacturadoRepository) {
		this.articuloManufacturadoRepository = articuloManufacturadoRepository;
	}
	
	@Override
	public ArrayList<ArticuloManufacturadoDTO> getAll() {
		ArrayList<ArticuloManufacturadoDTO> result = new ArrayList<>();

		for (ArticuloManufacturado manuf : articuloManufacturadoRepository.findAll()) {
			ArticuloManufacturadoDTO temp = new ArticuloManufacturadoDTO();

			temp.setId_artManuf(manuf.getId_artManuf());
			temp.setMinutosPrep(manuf.getMinutosPrep());
			temp.setNombre_articuloM(manuf.getNombre_articuloM());
			temp.setDetalleRecetas(manuf.getDetalleRecetas());
			temp.setdFactura(manuf.getdFactura());
			temp.setEnMenu(manuf.isEnMenu());
			temp.setCategoriaManuf(manuf.getCategoriaManuf());
			temp.setDetalle(manuf.getDetalle());
			temp.setFoto(manuf.getFoto());
			temp.setPrecioDePlato(manuf.getPrecioDePlato());
			
			result.add(temp);
		}

		return result;
	}

	@Override
	public ArticuloManufacturadoDTO getOne(int id) {
		Optional<ArticuloManufacturado> temp = articuloManufacturadoRepository.findById(id); 
		ArticuloManufacturadoDTO result = new ArticuloManufacturadoDTO();

		try {

			ArticuloManufacturado resultBD = temp.get();

			result.setId_artManuf(resultBD.getId_artManuf());
			result.setMinutosPrep(resultBD.getMinutosPrep());
			result.setNombre_articuloM(resultBD.getNombre_articuloM());
			result.setDetalleRecetas(resultBD.getDetalleRecetas());
			result.setdFactura(resultBD.getdFactura());
			result.setEnMenu(resultBD.isEnMenu());
			result.setCategoriaManuf(resultBD.getCategoriaManuf());
			result.setDetalle(resultBD.getDetalle());
			result.setFoto(resultBD.getFoto());
			result.setPrecioDePlato(resultBD.getPrecioDePlato());
			
		} catch (Exception e) {
			System.out.println(e.getMessage());

		}
		return result;
	}

	@Override
	public ArticuloManufacturadoDTO save(ArticuloManufacturadoDTO body) {
		ArticuloManufacturado guardado = new ArticuloManufacturado();

		guardado.setNombre_articuloM(body.getNombre_articuloM());
		guardado.setMinutosPrep(body.getMinutosPrep());
		guardado.setdFactura(body.getdFactura());;
		guardado.setDetalleRecetas(body.getDetalleRecetas());
		guardado.setEnMenu(body.isEnMenu());
		guardado.setCategoriaManuf(body.getCategoriaManuf());
		guardado.setDetalle(body.getDetalle());
		guardado.setFoto(body.getFoto());
		guardado.setPrecioDePlato(body.getPrecioDePlato());
		
		try {
			articuloManufacturadoRepository.save(guardado);
			body.setId_artManuf(guardado.getId_artManuf());
		} catch (Exception e) {
			System.out.println("Error al guardar");
		}
		return body;
	}

	@Override
	public ArticuloManufacturadoDTO update(ArticuloManufacturadoDTO t, int id) {
		Optional<ArticuloManufacturado> pOptional = articuloManufacturadoRepository.findById(id);

		ArticuloManufacturado temp = new ArticuloManufacturado();

		try {
			temp = pOptional.get();

			temp.setNombre_articuloM(t.getNombre_articuloM());
			temp.setMinutosPrep(t.getMinutosPrep());
			temp.setdFactura(t.getdFactura());
			temp.setDetalleRecetas(t.getDetalleRecetas());
			temp.setEnMenu(t.isEnMenu());
			temp.setCategoriaManuf(t.getCategoriaManuf());
			temp.setDetalle(t.getDetalle());
			temp.setFoto(t.getFoto());
			temp.setPrecioDePlato(t.getPrecioDePlato());
			
			articuloManufacturadoRepository.save(temp);
			t.setId_artManuf(temp.getId_artManuf());

		} catch (Exception e) {
			System.out.println("No existe");
		}
		return t;
	}
	
	@Override
	public boolean delete(int id) {
		try {
			articuloManufacturadoRepository.deleteById(id);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
}
