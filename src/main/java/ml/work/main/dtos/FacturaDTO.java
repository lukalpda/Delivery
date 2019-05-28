package ml.work.main.dtos;

import java.io.Serializable; 
import java.util.Date;
import java.time.*;
import java.util.ArrayList;
import java.util.List;

import ml.work.main.entities.Cliente;
import ml.work.main.entities.DetalleFactura;



public class FacturaDTO extends ComprobanteDTO implements Serializable{
		
	private int numFactura;
	private boolean esEfectivo;			
	private float total;
	private List <DetalleFactura> detalleFactura= new ArrayList<DetalleFactura>(); 
	private Cliente cliente;
	

	public FacturaDTO() {
		super();
	}

	public FacturaDTO(Date fecha, LocalTime hora, List<DetalleFactura> detalleFactura, Cliente cliente, String nombre_comprobante, int numFactura, boolean esEfectivo, float total, Date fechaAnulado) {
		super(fecha, hora, nombre_comprobante, fechaAnulado);
		this.numFactura = numFactura;
		this.esEfectivo = esEfectivo;
		this.total = total;
		this.detalleFactura = detalleFactura;
		this.cliente = cliente;
	}	

	public boolean isEsEfectivo() {
		return esEfectivo;
	}

	public void setEsEfectivo(boolean esEfectivo) {
		this.esEfectivo = esEfectivo;
	}

	public int getNumFactura() {
		return numFactura;
	}

	public void setNumFactura(int numFactura) {
		this.numFactura = numFactura;
	}

	public float getTotal() {
		return total;
	}

	public void setTotal(float total) {
		this.total = total;
	}
	
	public Date getFecha() {
		return super.getFecha();
	}

	public void setFecha(Date fecha) {
		super.setFecha(fecha);;
	}

	public LocalTime getHora() {
		return super.getHora();
	}

	public void setHora(LocalTime hora) {
		super.setHora(hora);
	}

	public String getNombre_comprobante() {
		return super.getNombre_comprobante();
	}

	public void setNombre_comprobante(String nombre_comprobante) {
		super.setNombre_comprobante(nombre_comprobante);;
	}

	public List<DetalleFactura> getDetalleFactura() {
		return detalleFactura;
	}

	public void setDetalleFactura(List<DetalleFactura> detalleFactura) {
		this.detalleFactura = detalleFactura;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}	
	
	
	
	/*
	 * public ArrayList<DetalleFactura> getDetalleFactura() { return detalleFactura;
	 * }
	 * 
	 * public void setDetalleFactura(ArrayList<DetalleFactura> detalleFactura) {
	 * this.detalleFactura = detalleFactura; }
	 */
}
