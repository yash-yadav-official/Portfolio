package portfolio.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import portfolio.backend.entity.TechStack;

import java.util.List;

@Repository
public interface TechStackRepository extends JpaRepository<TechStack, Long> {
    List<TechStack> findByProfileId(Long profileId);
} 