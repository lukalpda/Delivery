package ml.work.main.dtos;


import java.io.Serializable;
import java.util.List;

import ml.work.main.entities.CategoriaProducto;
import ml.work.main.entities.DetalleFactura;
import ml.work.main.entities.DetalleReceta;
import ml.work.main.entities.Precios;
import ml.work.main.entities.UnidadMedida;

public class ArticuloDTO implements Serializable{

	private int id_articulo;
	
	private String nombre_articulo;
	
	private float costo;
	
	private boolean esParaVenta;
	
	private double stock;
	
	private CategoriaProducto categoriaProd;
	
	private UnidadMedida medidaProd;
	
	private List<DetalleFactura> detFactura;
	
	private List<DetalleReceta> detReceta;
	
	private double stockMinimo;
	
	private boolean enLista;
	
	private String foto;
	
	private String detalle;	

	private List<Precios> precioArticulo;
	
	
	public ArticuloDTO() {
	}	

	public int getId_articulo() {
		return id_articulo;
	}	

	public ArticuloDTO(int id_articulo, String nombre_articulo, float costo, boolean esParaVenta, double stock,
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
