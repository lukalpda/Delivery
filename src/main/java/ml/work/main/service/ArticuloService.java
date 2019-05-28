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
			temp.setEsParaVenta(articulo.isEsParaVenta());
			temp.setStock(articulo.getStock());
			temp.setCategoriaProd(articulo.getCategoriaProd());
			temp.setMedidaProd(articulo.getMedidaProd());
			temp.setDetFactura(articulo.getDetFactura());
			temp.setDetReceta(articulo.getDetReceta());
			temp.setStockMinimo(articulo.getStockMinimo());
			temp.setEnLista(articulo.isEnLista());
			temp.setDetalle(articulo.getDetalle());
			temp.setFoto(articulo.getFoto());
			temp.setPrecioArticulo(articulo.getPrecioArticulo());

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
			result.setEsParaVenta(resultBD.isEsParaVenta());
			result.setMedidaProd(resultBD.getMedidaProd());
			result.setCategoriaProd(resultBD.getCategoriaProd());
			result.setDetFactura(resultBD.getDetFactura());;
			result.setDetReceta(resultBD.getDetReceta());
			result.setStockMinimo(resultBD.getStockMinimo());
			result.setEnLista(resultBD.isEnLista());
			result.setDetalle(resultBD.getDetalle());
			result.setFoto(resultBD.getFoto());
			result.setPrecioArticulo(resultBD.getPrecioArticulo());

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
				guardado.setEsParaVenta(t.isEsParaVenta());
				guardado.setMedidaProd(t.getMedidaProd());
				guardado.setNombre_articulo(t.getNombre_articulo());
				guardado.setDetFactura(t.getDetFactura());;
				guardado.setDetReceta(t.getDetReceta());
				guardado.setStockMinimo(t.getStockMinimo());
				guardado.setEnLista(t.isEnLista());
				guardado.setDetalle(t.getDetalle());
				guardado.setDetalle(t.getDetalle());
				guardado.setFoto(t.getFoto());	
				guardado.setPrecioArticulo(t.getPrecioArticulo());
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
			temp.setEsParaVenta(t.isEsParaVenta());
			temp.setMedidaProd(t.getMedidaProd());
			temp.setNombre_articulo(t.getNombre_articulo());
			temp.setStock(t.getStock());
			temp.setDetFactura(t.getDetFactura());;
			temp.setDetReceta(t.getDetReceta());
			temp.setStockMinimo(t.getStockMinimo());
			temp.setEnLista(t.isEnLista());
			temp.setFoto(t.getFoto());
			temp.setDetalle(t.getDetalle());
			temp.setPrecioArticulo(t.getPrecioArticulo());
		
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
