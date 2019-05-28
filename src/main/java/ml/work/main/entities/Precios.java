package ml.work.main.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "apirest_precios")
public class Precios {

	@Id
	@Column(name = "precio_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_precio;
	
	@Column(name = "precio_monto")
	private double precio;
	
	@Column(name = "precio_fechaInicio")
	private Date fechaInicio;
	
	@Column(name = "precio_fechaFin")
	private Date fechaFin;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_articulo")	
	private Articulo precioItem;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_artManuf")	
	private ArticuloManufacturado precioPlato;
	
	

	public Precios() {
	}

	public Precios(int id_precio, double precio, Date fechaInicio, Date fechaFin, Articulo precioItem,
			ArticuloManufacturado precioPlato) {
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
