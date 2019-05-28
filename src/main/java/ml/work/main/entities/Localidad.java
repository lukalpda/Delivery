package ml.work.main.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="apirest_localidad")
public class Localidad {

	@Id
	@Column(name = "localidad_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_Localidad;
	@Column(name = "localidad_nombre")
	private String nombre_localidad;

//	@OneToMany(mappedBy = "domicilios")
//	private List<Distrito> distritos = new ArrayList<Distrito>();
		
	public Localidad() {

	}

	public Localidad(int id_localidad, String nombre_localidad, List<Distrito> distritos) {
		this.id_Localidad = id_localidad;
//		this.distritos = distritos;
		this.nombre_localidad = nombre_localidad;
	}

	public int getId_Localidad() {
		return id_Localidad;
	}

	public void setId_Localidad(int id_Localidad) {
		this.id_Localidad = id_Localidad;
	}

	public String getNombre_localidad() {
		return nombre_localidad;
	}

	public void setNombre_localidad(String nombre_localidad) {
		this.nombre_localidad = nombre_localidad;
	}

//	public List<Distrito> getDistritos() {
//		return distritos;
//	}
//
//	public void setDistritos(List<Distrito> distritos) {
//		this.distritos = distritos;
//	}
	

}
