package ml.work.main.entities;

import java.sql.Date;

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
@Table(name = "apirest_detalle_receta")
public class DetalleReceta {

	@Id
	@Column(name = "receta_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_receta;
	
	@Column(name = "receta_cantidad")
	private float cantidad;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_articulo")
	private Articulo articulo;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_artManuf")
	private ArticuloManufacturado articuloManuf;
	
	@Column(name = "receta_fechaAnulado")
	private Date fechaAnulado;
		

	
	public DetalleReceta() {
	}	

	public DetalleReceta(int id_receta, float cantidad, Articulo articulo, ArticuloManufacturado articuloManuf, Date fechaAnulado) {
		this.id_receta = id_receta;
		this.cantidad = cantidad;
		this.articulo = articulo;
		this.articuloManuf = articuloManuf;
		this.fechaAnulado = fechaAnulado;
	}
	
	

	public int getId_receta() {
		return id_receta;
	}

	public void setId_receta(int id_receta) {
		this.id_receta = id_receta;
	}

	public float getCantidad() {
		return cantidad;
	}

	public void setCantidad(float cantidad) {
		this.cantidad = cantidad;
	}

	public Articulo getArticulo() {
		return articulo;
	}

	public void setArticulo(Articulo articulo) {
		this.articulo = articulo;
	}

	public ArticuloManufacturado getArticuloManuf() {
		return articuloManuf;
	}

	public void setArticuloManuf(ArticuloManufacturado articuloManuf) {
		this.articuloManuf = articuloManuf;
	}

	public Date getFechaAnulado() {
		return fechaAnulado;
	}

	public void setFechaAnulado(Date fechaAnulado) {
		this.fechaAnulado = fechaAnulado;
	}	
}
