package ml.work.main.dtos;

import java.io.Serializable;
import java.util.Date;
import java.time.*;
import java.util.ArrayList;
import java.util.List;

import ml.work.main.entities.DetalleFactura;

public class ComandaDTO extends ComprobanteDTO implements Serializable{
	
	private int id_comanda;
	
	private List<DetalleFactura> detalleFactura = new ArrayList<DetalleFactura>();

	public ComandaDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ComandaDTO(Date fecha, LocalTime hora, String nombre_comprobante, int id_comanda, List<DetalleFactura> detalleFactura, Date fechaAnulado) {
		super(fecha, hora, nombre_comprobante, fechaAnulado);
		this.id_comanda = id_comanda;
		this.detalleFactura = detalleFactura;
	}

	public int getId_comanda() {
		return id_comanda;
	}

	public void setId_comanda(int id_comanda) {
		this.id_comanda = id_comanda;
	}

	public List<DetalleFactura> getDetalleFactura() {
		return detalleFactura;
	}

	public void setDetalleFactura(List<DetalleFactura> detalleFactura) {
		this.detalleFactura = detalleFactura;
	}

}
