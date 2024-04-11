package com.d3n15tecback.repository;

import com.d3n15tecback.user.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

  Optional<User> findByEmail(String email);

  Optional<User> findByCpf(String cpf);

  Optional<User> findById(Long id);

  @Query(value = "select * from usuario u order by u.nome asc ",nativeQuery = true)
  List<User> findAllOrderByNome();

  Page<User> findAll(Pageable pageable);

  @Query(value = "select * from usuario u ",
    countQuery = "select count(*) from usuario u ",nativeQuery = true)
  Page<User> getAllUsuarios(Pageable pageable);

  @Query(value = "select * from usuario u where u.nome like %:busca% ",
          countQuery = "select count(*) from usuario u where u.nome like %:busca% ",nativeQuery = true)
  Page<User> getAllUsuariosBuscaNome(Pageable pageable, @Param("busca") String busca);

  @Query(value = "select * from usuario u where u.cpf like %:busca% ",
          countQuery = "select count(*) from usuario u where u.cpf like %:busca% ",nativeQuery = true)
  Page<User> getAllUsuariosBuscaCPF(Pageable pageable, @Param("busca") String busca);

  @Query(value = "select * from usuario u where u.email like %:busca% ",
          countQuery = "select count(*) from usuario u where u.email like %:busca% ",nativeQuery = true)
  Page<User> getAllUsuariosBuscaEmail(Pageable pageable, @Param("busca") String busca);

  @Modifying
  @Query(value = "DELETE FROM usuario u WHERE u.id = :id ", nativeQuery = true)
  void deleteById(@Param("id") Long id);
}
