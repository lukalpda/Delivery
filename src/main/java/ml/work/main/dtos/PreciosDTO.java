package ml.work.main.dtos;

import java.io.Serializable;
import java.util.Date;

import ml.work.main.entities.Articulo;
import ml.work.main.entities.ArticuloManufacturado;

public class PreciosDTO implements Serializable{
	
private int id_precio;
	
	private double precio;
	
	private Date fechaInicio;
	
	private Date fechaFin;
	
	private Articulo precioItem;	
	
	private ArticuloManufacturado precioPlato;
	
	
	public PreciosDTO() {
	}

	public PreciosDTO(int id_precio, double precio, Date fechaInicio, Date fechaFin, Articulo precioItem, ArticuloManufacturado precioPlato) {
		this.id_precio = id_precio;
		this.precio = precio;
		this.fechaInicio = fechaInicio;
		this.fechaFin = fechaFin;
		this.precioItem = precioItem;
		this.precioPlato = precioPlato;
	}

	public int getId_precio() {
		return id_precio;
	}

	public void setId_precio(int id_precio) {
		this.id_precio = id_precio;
	}

	public double getPrecio() {
		return precio;
	}

	public void setPrecio(double precio) {
		this.precio = precio;
	}

	public Date getFechaInicio() {
		return fechaInicio;
	}

	public void setFechaInicio(Date fechaInicio) {
		this.fechaInicio = fechaInicio;
	}

	public Date getFechaFin() {
		return fechaFin;
	}

	public void setFechaFin(Date fechaFin) {
		this.fechaFin = fechaFin;
	}

	public Articulo getPrecioItem() {
		return precioItem;
	}

	public void setPrecioItem(Articulo precioItem) {
		this.precioItem = precioItem;
	}

	public ArticuloManufacturado getPrecioPlato() {
		return precioPlato;
	}

	public void setPrecioPlato(ArticuloManufacturado precioPlato) {
		this.precioPlato = precioPlato;
	}
}
