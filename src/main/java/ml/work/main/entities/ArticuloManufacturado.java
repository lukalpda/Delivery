package ml.work.main.entities;

import java.util.ArrayList;
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
@Table(name = "apirest_art_manufacturado")
public class ArticuloManufacturado {
	
	@Id
	@Column(name = "articuloManuf_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_artManuf;
	
	@Column(name = "articuloManuf_nombre")
	private String nombre_articuloM;
	
	@Column(name = "articuloManuf_minutos")
	private int minutosPrep;
	
	@OneToMany(mappedBy = "articuloManuf")
	private List<DetalleReceta> detalleRecetas = new ArrayList<DetalleReceta>();
	
	@OneToMany(mappedBy = "manufacturado")
	private List<DetalleFactura> dFactura;
	
	@Column(name = "articuloManuf_enMenu")
	private boolean enMenu;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_categoria")	
	private CategoriaProducto categoriaManuf;
	
	@Column(name = "manuf_foto")
	private String foto;
	
	@Column(name = "articuloManuf_detalle")
	private String detalle;	
	
	@OneToMany(mappedBy = "precioPlato")
	private List<Precios> precioDePlato;
	
	
	public ArticuloManufacturado() {
	}

	public ArticuloManufacturado(int id_artManuf, String nombre_articuloM, int minutosPrep,
			List<DetalleReceta> detalleRecetas, List<Precios> precioDePlato, List<DetalleFactura> dFactura, 
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
