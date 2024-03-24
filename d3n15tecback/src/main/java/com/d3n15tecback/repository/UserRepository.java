package com.d3n15tecback.repository;

import com.d3n15tecback.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

  Optional<User> findByEmail(String email);
  Optional<User> findByCpf(String cpf);

  Optional<User> findById(Long id);
}
