package ml.work.main.service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.stereotype.Service;

import ml.work.main.dtos.ArticuloDTO;
import ml.work.main.entities.Articulo;
import ml.work.main.repositories.ArticuloRepository;

@Service
public class ArticuloService implements ObjectService<ArticuloDTO> {

	private ArticuloRepository articuloRepository;

	public ArticuloService(ArticuloRepository articuloRepository) {
		this.articuloRepository = articuloRepository;
	}

	@Override
	public ArrayList<ArticuloDTO> getAll() {

		ArrayList<ArticuloDTO> result = new ArrayList<>();

		for (Articulo articulo : articuloRepository.findAll()) {
			ArticuloDTO temp = new ArticuloDTO();

			temp.setId_articulo(articulo.getId_articulo());
			temp.setNombre_articulo(articulo.getNombre_articulo());
			temp.setCosto(articulo.getCosto());
			temp.setEsPrima(articulo.isEsPrima());
			temp.setStock(articulo.getStock());
			temp.setCategoriaProd(articulo.getCategoriaProd());
			temp.setMedidaProd(articulo.getMedidaProd());
			temp.setStockMinimo(articulo.getStockMinimo());
			temp.setEnLista(articulo.isEnLista());
			temp.setDetalle(articulo.getDetalle());
			temp.setFoto(articulo.getFoto());
			temp.setPrecio(articulo.getPrecio());
			//temp.setPrecioArticulo(articulo.getPrecioArticulo());
			//temp.setDetFactura(articulo.getDetFactura());
			//temp.setDetReceta(articulo.getDetReceta());
			
			result.add(temp);
		}

		return result;

	}

	@Override
	public ArticuloDTO getOne(int id) {
		Optional<Articulo> temp = articuloRepository.findById(id);

		ArticuloDTO result = new ArticuloDTO();

		try {

			Articulo resultBD = temp.get();

			result.setId_articulo(resultBD.getId_articulo());
			result.setCosto(resultBD.getCosto());
			result.setNombre_articulo(resultBD.getNombre_articulo());
			result.setStock(resultBD.getStock());
			result.setEsPrima(resultBD.isEsPrima());
			result.setMedidaProd(resultBD.getMedidaProd());
			result.setCategoriaProd(resultBD.getCategoriaProd());			
			result.setStockMinimo(resultBD.getStockMinimo());
			result.setEnLista(resultBD.isEnLista());
			result.setDetalle(resultBD.getDetalle());
			result.setFoto(resultBD.getFoto());
			result.setPrecio(resultBD.getPrecio());
			//result.setPrecioArticulo(resultBD.getPrecioArticulo());
			//result.setDetFactura(resultBD.getDetFactura());;
			//result.setDetReceta(resultBD.getDetReceta());

		} catch (Exception e) {
			System.out.println(e.getMessage());

		}
		return result;
	}

	@Override
	public ArticuloDTO save(ArticuloDTO t) {
		Articulo guardado = new Articulo();

				guardado.setCosto(t.getCosto());
				guardado.setStock(t.getStock());
				guardado.setCategoriaProd(t.getCategoriaProd());
				guardado.setEsPrima(t.isEsPrima());
				guardado.setMedidaProd(t.getMedidaProd());
				guardado.setNombre_articulo(t.getNombre_articulo());
				guardado.setStockMinimo(t.getStockMinimo());
				guardado.setEnLista(t.isEnLista());
				guardado.setDetalle(t.getDetalle());
				guardado.setDetalle(t.getDetalle());
				guardado.setFoto(t.getFoto());	
				guardado.setPrecio(t.getPrecio());
				//guardado.setPrecioArticulo(t.getPrecioArticulo());
				//guardado.setDetFactura(t.getDetFactura());;
				//guardado.setDetReceta(t.getDetReceta());
				
		try {
			articuloRepository.save(guardado);
			t.setId_articulo(guardado.getId_articulo());
		} catch (Exception e) {
			System.out.println("Error al guardar");
		}
		return t;
	}

	@Override
	public ArticuloDTO update(ArticuloDTO t, int id) {
		Optional<Articulo> pOptional = articuloRepository.findById(id);

		Articulo temp = new Articulo();

		try {
			temp = pOptional.get();

			temp.setCategoriaProd(t.getCategoriaProd());
			temp.setCosto(t.getCosto());
			temp.setEsPrima(t.isEsPrima());
			temp.setMedidaProd(t.getMedidaProd());
			temp.setNombre_articulo(t.getNombre_articulo());
			temp.setStock(t.getStock());
			temp.setStockMinimo(t.getStockMinimo());
			temp.setEnLista(t.isEnLista());
			temp.setFoto(t.getFoto());
			temp.setDetalle(t.getDetalle());
			temp.setPrecio(t.getPrecio());
			//temp.setPrecioArticulo(t.getPrecioArticulo());
			//temp.setDetFactura(t.getDetFactura());;
			//temp.setDetReceta(t.getDetReceta());
			
		
			articuloRepository.save(temp);
			t.setId_articulo(temp.getId_articulo());

		} catch (Exception e) {
			System.out.println("No existe");
		}
		return t;
	}

	@Override
	public boolean delete(int id) {
		try {
			articuloRepository.deleteById(id);
		}catch (Exception e) {
			return false;
		}		
		return true;
	}

}
