package com.d3n15tecback.repository;

import com.d3n15tecback.user.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

  Optional<User> findByEmail(String email);
  Optional<User> findByCpf(String cpf);
  Optional<User> findById(Long id);

  @Query(value = "select * from usuario u order by u.firstname asc ",nativeQuery = true)
  List<User> findAllOrderByfirstname();
  Page<User> findAll(Pageable pageable);

  @Query(value = "select * from usuario u ",
    countQuery = "select count(*) from usuario u ",nativeQuery = true)
  Page<User> getAllUsuarios(Pageable pageable);
}
