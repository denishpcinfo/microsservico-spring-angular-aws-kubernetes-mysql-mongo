package com.d3n15tecback.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import static com.d3n15tecback.user.Permission.ADMIN_CREATE;
import static com.d3n15tecback.user.Permission.ADMIN_DELETE;
import static com.d3n15tecback.user.Permission.ADMIN_READ;
import static com.d3n15tecback.user.Permission.ADMIN_UPDATE;
import static com.d3n15tecback.user.Permission.MANAGER_CREATE;
import static com.d3n15tecback.user.Permission.MANAGER_DELETE;
import static com.d3n15tecback.user.Permission.MANAGER_READ;
import static com.d3n15tecback.user.Permission.MANAGER_UPDATE;
import static com.d3n15tecback.user.Role.*;
import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity
public class SecurityConfiguration {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;
    private final ApplicationConfig applicationConfig;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors(httpSecurityCorsConfigurer -> httpSecurityCorsConfigurer.configurationSource(applicationConfig.corsConfigurationSource()))
                .csrf(AbstractHttpConfigurer::disable)
                .sessionManagement( smc -> smc.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)

                .authorizeHttpRequests((requests) -> requests
                        .requestMatchers(
                        "/api/autenticacao/**",
                        "/v2/api-docs",
                        "/v3/api-docs",
                        "/v3/api-docs/**",
                        "/swagger-resources",
                        "/swagger-resources/**",
                        "/configuration/ui",
                        "/configuration/security",
                        "/swagger-ui/**",
                        "/webjars/**",
                        "/swagger-ui.html"
                ).permitAll()

                .requestMatchers("/api/profile/**").authenticated()
                .requestMatchers("/api/users/**").hasAnyRole(ADMIN.name())
                .requestMatchers("/api/filtros/**").hasAnyRole(ADMIN.name())
                .requestMatchers("/api/management/**").hasAnyRole(ADMIN.name(), MANAGER.name())
                .requestMatchers(GET, "/api/management/**").hasAnyAuthority(ADMIN_READ.name(), MANAGER_READ.name())
                .requestMatchers(POST, "/api/management/**").hasAnyAuthority(ADMIN_CREATE.name(), MANAGER_CREATE.name())
                .requestMatchers(PUT, "/api/management/**").hasAnyAuthority(ADMIN_UPDATE.name(), MANAGER_UPDATE.name())
                .requestMatchers(DELETE, "/api/management/**").hasAnyAuthority(ADMIN_DELETE.name(), MANAGER_DELETE.name()));

        return http.build();
    }
}
