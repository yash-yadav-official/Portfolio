package portfolio.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import portfolio.backend.entity.TechStack;

@Repository
public interface TechStackRepository extends JpaRepository<TechStack, Long> {

} 