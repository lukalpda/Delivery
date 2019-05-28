package ml.work.main.service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.stereotype.Service;

import ml.work.main.dtos.PedidoDTO;
import ml.work.main.entities.Pedido;
import ml.work.main.repositories.PedidoRepository;

@Service
public class PedidoService implements ObjectService<PedidoDTO> {

	private PedidoRepository pedidoRepository;

	public PedidoService(PedidoRepository pedidoRepository) {
		this.pedidoRepository = pedidoRepository;
	}
	
	@Override
	public ArrayList<PedidoDTO> getAll() {

		ArrayList<PedidoDTO> result = new ArrayList<>();

		for (Pedido pedido : pedidoRepository.findAll()) {
			PedidoDTO temp = new PedidoDTO();

			temp.setNumPedido(pedido.getNumPedido());
			temp.setTotal(pedido.getTotal());
			temp.setFecha(pedido.getFecha());
			temp.setHora(pedido.getHora());
			temp.setNombre_comprobante(pedido.getNombre_comprobante());
			temp.setDetallePedido(pedido.getDetallePedido());
			temp.setFechaAnulado(pedido.getFechaAnulado());

			result.add(temp);
		}

		return result;
				
	}

	@Override
	public PedidoDTO getOne(int id) {		
		Optional<Pedido> temp = pedidoRepository.findById(id); // Optional: puede o no existir por ese Id. de no
																	// existir, no se crea el objeto
		PedidoDTO result = new PedidoDTO();

		try {

			Pedido resultBD = temp.get();

			result.setNumPedido(resultBD.getNumPedido());
			result.setTotal(resultBD.getTotal());
			result.setFecha(resultBD.getFecha());
			result.setHora(resultBD.getHora());
			result.setNombre_comprobante(resultBD.getNombre_comprobante());
			result.setFechaAnulado(resultBD.getFechaAnulado());

		} catch (Exception e) {
			System.out.println(e.getMessage());

		}
		return result;
	}

	@Override
	public PedidoDTO save(PedidoDTO body) {
		Pedido guardado = new Pedido();

		guardado.setFecha(body.getFecha());
		guardado.setHora(body.getHora());
		guardado.setNombre_comprobante(body.getNombre_comprobante());
		guardado.setTotal(body.getTotal());
		guardado.setDetallePedido(body.getDetallePedido());
		guardado.setFechaAnulado(body.getFechaAnulado());

		try {
			pedidoRepository.save(guardado);
			body.setNumPedido(guardado.getNumPedido());
		} catch (Exception e) {
			System.out.println("Error al guardar");
		}
		return body;
	}

	@Override
	public PedidoDTO update(PedidoDTO t, int id) {
		Optional<Pedido> pOptional = pedidoRepository.findById(id);

		Pedido temp = new Pedido();

		try {
			temp = pOptional.get();

			temp.setDetallePedido(t.getDetallePedido());
			temp.setFecha(t.getFecha());
			temp.setHora(t.getHora());
			temp.setNombre_comprobante(t.getNombre_comprobante());
			temp.setTotal(t.getTotal());
			temp.setFechaAnulado(t.getFechaAnulado());
		
			pedidoRepository.save(temp);
			t.setNumPedido(temp.getNumPedido());

		} catch (Exception e) {
			System.out.println("No existe");
		}
		return t;
	}

	@Override
	public boolean delete(int id) {
		try {
			pedidoRepository.deleteById(id);
		}catch (Exception e) {
			return false;
		}		
		return true;
	}

}
