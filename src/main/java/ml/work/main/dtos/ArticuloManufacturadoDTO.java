package ml.work.main.dtos;

import java.io.Serializable;
import java.util.List;

import ml.work.main.entities.CategoriaProducto;
import ml.work.main.entities.DetalleFactura;
import ml.work.main.entities.DetalleReceta;
import ml.work.main.entities.Precios;

public class ArticuloManufacturadoDTO implements Serializable{
	
	private int id_artManuf;
	
	private String nombre_articuloM;
	
	private int minutosPrep;
	
	private List<DetalleReceta> detalleRecetas;
	
	private List<DetalleFactura> dFactura;
	
	private boolean enMenu;
	
	private CategoriaProducto categoriaManuf;
	
	private String foto;
	
	private String detalle;	
	
	private List<Precios> precioDePlato;
	

	public ArticuloManufacturadoDTO() {
	}

	
	public ArticuloManufacturadoDTO(int id_artManuf, String nombre_articuloM, int minutosPrep, 
			List<Precios> precioDePlato, List<DetalleReceta> detalleRecetas, List<DetalleFactura> dFactura, 
			boolean enMenu, CategoriaProducto categoriaManuf, String foto, String detalle) {
		this.id_artManuf = id_artManuf;
		this.nombre_articuloM = nombre_articuloM;
		this.minutosPrep = minutosPrep;
		this.detalleRecetas = detalleRecetas;
		this.dFactura = dFactura;
		this.enMenu = enMenu;
		this.categoriaManuf = categoriaManuf;
		this.foto = foto;
		this.detalle = detalle;
		this.precioDePlato = precioDePlato;
	}


	public int getId_artManuf() {
		return id_artManuf;
	}

	public void setId_artManuf(int id_artManuf) {
		this.id_artManuf = id_artManuf;
	}

	public String getNombre_articuloM() {
		return nombre_articuloM;
	}

	public void setNombre_articuloM(String nombre_articuloM) {
		this.nombre_articuloM = nombre_articuloM;
	}

	public int getMinutosPrep() {
		return minutosPrep;
	}

	public void setMinutosPrep(int minutosPrep) {
		this.minutosPrep = minutosPrep;
	}

	public List<DetalleReceta> getDetalleRecetas() {
		return detalleRecetas;
	}

	public void setDetalleRecetas(List<DetalleReceta> detalleRecetas) {
		this.detalleRecetas = detalleRecetas;
	}

	
	public List<DetalleFactura> getdFactura() {
		return dFactura;
	}


	public void setdFactura(List<DetalleFactura> dFactura) {
		this.dFactura = dFactura;
	}


	public boolean isEnMenu() {
		return enMenu;
	}


	public void setEnMenu(boolean enMenu) {
		this.enMenu = enMenu;
	}


	public CategoriaProducto getCategoriaManuf() {
		return categoriaManuf;
	}


	public void setCategoriaManuf(CategoriaProducto categoriaManuf) {
		this.categoriaManuf = categoriaManuf;
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


	public List<Precios> getPrecioDePlato() {
		return precioDePlato;
	}


	public void setPrecioDePlato(List<Precios> precioDePlato) {
		this.precioDePlato = precioDePlato;
	}	
}
