package ml.work.main.entities;


import java.util.Date; 
import java.time.*;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class Comprobantes{

	/*
	 * // //@Id // @Column(name="cod_comprobante") // //@GeneratedValue(strategy =
	 * GenerationType.IDENTITY) // protected int cod_comprobante;
	 */	
	@Column(name ="comprobante_fecha")
	protected Date fecha;
	
	@Column(name="comprobante_hora")
	protected LocalTime hora;
	
	@Column(name="comprobante_nombre")
	protected String nombre_comprobante;
	
	@Column(name = "comprobante_fechaAnulado")
	protected Date fechaAnulado;
	
	

	public Comprobantes() {}


	public Comprobantes(/*int cod_comprobante,*/ Date fecha, LocalTime hora, String nombre_comprobante, Date fechaAnulado) {
		
	//	this.cod_comprobante = cod_comprobante;
		this.fecha = fecha;
		this.hora = hora;
		this.nombre_comprobante = nombre_comprobante;
		this.fechaAnulado = fechaAnulado;
	}

	
	/*
	 * // public int getCod_comprobante() { // return cod_comprobante; // } // // //
	 * public void setCod_comprobante(int cod_comprobante) { // this.cod_comprobante
	 * = cod_comprobante; // }
	 */
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
