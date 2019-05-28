package ml.work.main.dtos;

import java.io.Serializable;
import java.util.Date;
import java.time.*;
import java.util.ArrayList;
import java.util.List;

import ml.work.main.entities.DetalleFactura;

public class PedidoDTO extends ComprobanteDTO implements Serializable{
	
	private int numPedido;
	private float total;
	private List <DetalleFactura> detallePedido= new ArrayList<DetalleFactura>();
	
	public PedidoDTO() {
		super();
	}
	
	public PedidoDTO(Date fecha, LocalTime hora, String nombre_comprobante, int numPedido, float total, List<DetalleFactura> detallePedido, Date fechaAnulado) {
		super(fecha, hora, nombre_comprobante, fechaAnulado);
		this.numPedido = numPedido;
		this.total = total;
		this.detallePedido = detallePedido;
	}

	public int getNumPedido() {
		return numPedido;
	}

	public void setNumPedido(int numPedido) {
		this.numPedido = numPedido;
	}

	public float getTotal() {
		return total;
	}

	public void setTotal(float total) {
		this.total = total;
	}

	public List<DetalleFactura> getDetallePedido() {
		return detallePedido;
	}

	public void setDetallePedido(List<DetalleFactura> detallePedido) {
		this.detallePedido = detallePedido;
	} 
	
	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public LocalTime getHora() {
		return hora;
	}

	public void setHora(LocalTime hora) {
		this.hora = hora;
	}

	public String getNombre_comprobante() {
		return nombre_comprobante;
	}

	public void setNombre_comprobante(String nombre_comprobante) {
		this.nombre_comprobante = nombre_comprobante;
	}

}
