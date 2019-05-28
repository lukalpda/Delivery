package ml.work.main.entities;

import java.util.Date;
import java.time.*;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "apirest_comanda")
public class Comanda extends Comprobantes{

	@Id
	@Column(name = "comanda_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_comanda;
	
	@OneToMany(mappedBy = "comanda", cascade = CascadeType.ALL)
	private List<DetalleFactura> detalleFactura = new ArrayList<DetalleFactura>();

	public Comanda() {
		super();
	}

	public Comanda(Date fecha, LocalTime hora, String nombre_comprobante, int id, List<DetalleFactura> det, Date fechaAnulado) {
		super(fecha, hora, nombre_comprobante, fechaAnulado);
		id_comanda = id;
		detalleFactura = det;
	}

	public int getId_comanda() {
		return id_comanda;
	}

	public void setId_comanda(int id_comanda) {
		this.id_comanda = id_comanda;
	}

	public List<DetalleFactura> getDetalleFactura() {
		return detalleFactura;
	}

	public void setDetalleFactura(List<DetalleFactura> detalleFactura) {
		this.detalleFactura = detalleFactura;
	}	
}
