package com.d3n15tecback.user;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Integer> {

  Optional<User> findByEmail(String email);

  Optional<User> findById(Long id);
}
