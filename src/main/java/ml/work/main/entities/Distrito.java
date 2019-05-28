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
import javax.persistence.Table;

@Entity
@Table(name="apirest_distrito")
public class Distrito {
	@Id
	@Column(name="distrito_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_Distrito;
	
	@Column(name="nombreDistrito")
	private String nombreDistrito;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="id_Localidad")
	private Localidad localidad;
	
	//@OneToMany(mappedBy = "distrito", cascade = CascadeType.ALL)
	//private List<Domicilio> domicilios = new ArrayList<Domicilio>();
	
	public Distrito() {
		
	}

	public Distrito(int id_Distrito, String nombreDistrito, Localidad localidad, List<Domicilio> domicilios) {
		this.id_Distrito = id_Distrito;
		this.nombreDistrito = nombreDistrito;
		this.localidad = localidad;
		//this.domicilios = domicilios;
	}

	public int getId_Distrito() {
		return id_Distrito;
	}

	public void setId_Distrito(int id_Distrito) {
		this.id_Distrito = id_Distrito;
	}

	public String getNombreDistrito() {
		return nombreDistrito;
	}

	public void setNombreDistrito(String nombreDistrito) {
		this.nombreDistrito = nombreDistrito;
	}

	public Localidad getLocalidad() {
		return localidad;
	}

	public void setLocalidad(Localidad localidad) {
		this.localidad = localidad;
	}

//	public List<Domicilio> getDomicilios() {
//		return domicilios;
//	}
//
//	public void setDomicilios(List<Domicilio> domicilios) {
//		this.domicilios = domicilios;
//	}
	
	
}
