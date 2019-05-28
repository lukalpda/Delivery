package ml.work.main.dtos;

import java.util.Date;
import java.time.*;

public abstract class ComprobanteDTO {
		
	protected Date fecha;
		
	protected LocalTime hora;
		
	protected String nombre_comprobante;	
	
	protected Date fechaAnulado;
	
	public ComprobanteDTO() {}

	public ComprobanteDTO(Date fecha, LocalTime hora, String nombre_comprobante, Date fechaAnulado) {		
		this.fecha = fecha;
		this.hora = hora;
		this.nombre_comprobante = nombre_comprobante;
		this.fechaAnulado = fechaAnulado;
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

	public Date getFechaAnulado() {
		return fechaAnulado;
	}

	public void setFechaAnulado(Date fechaAnulado) {
		this.fechaAnulado = fechaAnulado;
	}	
}
