package ml.work.main.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ml.work.main.entities.Comanda;

@Repository
public interface ComandaRepository extends JpaRepository<Comanda, Integer>{

}
