package ml.work.main.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "apirest_articulos")
public class Articulo {
	
	@Id
	@Column(name = "articulo_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_articulo;
	
	@Column(name = "articulo_nombre")
	private String nombre_articulo;
	
	@Column(name = "articulo_costo")
	private float costo;
	
	@Column(name = "articulo_vendible")
	private boolean esParaVenta;
	
	@Column(name = "articulo_stock")
	private double stock;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_categoria")	
	private CategoriaProducto categoriaProd;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_medida")	
	private UnidadMedida medidaProd;
	
	@OneToMany(mappedBy = "item")
	private List<DetalleFactura> detFactura;
	
	@OneToMany(mappedBy = "articuloManuf")
	private List<DetalleReceta> detReceta;
	
	@Column(name = "stockMinimo")
	private double stockMinimo;
	
	@Column(name = "enLista")
	private boolean enLista;
	
	@Column(name = "articulo_foto")
	private String foto;
	
	@Column(name = "articulo_detalle")
	private String detalle;
	
	@OneToMany(mappedBy = "precioItem")
	private List<Precios> precioArticulo;
	
	

	public Articulo() {
	}
		
	public Articulo(int id_articulo, String nombre_articulo, float costo, boolean esParaVenta, double stock,
			CategoriaProducto categoriaProd, UnidadMedida medidaProd, List<DetalleFactura> detFactura,
			List<DetalleReceta> detReceta, double stockMinimo, boolean enLista, String foto, String detalle, List<Precios> precioArticulo) {
		this.id_articulo = id_articulo;
		this.nombre_articulo = nombre_articulo;
		this.costo = costo;
		this.esParaVenta = esParaVenta;
		this.stock = stock;
		this.categoriaProd = categoriaProd;
		this.medidaProd = medidaProd;
		this.detFactura = detFactura;
		this.detReceta = detReceta;
		this.stockMinimo = stockMinimo;
		this.enLista = enLista;
		this.foto = foto;
		this.detalle = detalle;
		this.precioArticulo = precioArticulo;
	}

	public int getId_articulo() {
		return id_articulo;
	}

	public void setId_articulo(int id_articulo) {
		this.id_articulo = id_articulo;
	}

	public String getNombre_articulo() {
		return nombre_articulo;
	}

	public void setNombre_articulo(String nombre_articulo) {
		this.nombre_articulo = nombre_articulo;
	}

	public float getCosto() {
		return costo;
	}

	public void setCosto(float costo) {
		this.costo = costo;
	}

	public boolean isEsParaVenta() {
		return esParaVenta;
	}

	public void setEsParaVenta(boolean esParaVenta) {
		this.esParaVenta = esParaVenta;
	}

	public double getStock() {
		return stock;
	}

	public void setStock(double stock) {
		this.stock = stock;
	}

	public CategoriaProducto getCategoriaProd() {
		return categoriaProd;
	}

	public void setCategoriaProd(CategoriaProducto categoriaProd) {
		this.categoriaProd = categoriaProd;
	}

	public UnidadMedida getMedidaProd() {
		return medidaProd;
	}

	public void setMedidaProd(UnidadMedida medidaProd) {
		this.medidaProd = medidaProd;
	}

	public List<DetalleReceta> getDetReceta() {
		return detReceta;
	}

	public void setDetReceta(List<DetalleReceta> detReceta) {
		this.detReceta = detReceta;
	}

	public List<DetalleFactura> getDetFactura() {
		return detFactura;
	}

	public void setDetFactura(List<DetalleFactura> detFactura) {
		this.detFactura = detFactura;
	}

	public double getStockMinimo() {
		return stockMinimo;
	}

	public void setStockMinimo(double stockMinimo) {
		this.stockMinimo = stockMinimo;
	}

	public boolean isEnLista() {
		return enLista;
	}

	public void setEnLista(boolean enLista) {
		this.enLista = enLista;
	}
	
	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public String getDetalle() {
		return detalle;
	}

	public void setDetalle(String detalle) {
		this.detalle = detalle;
	}

	public List<Precios> getPrecioArticulo() {
		return precioArticulo;
	}

	public void setPrecioArticulo(List<Precios> precioArticulo) {
		this.precioArticulo = precioArticulo;
	}
	
}
