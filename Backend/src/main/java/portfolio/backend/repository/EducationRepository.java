package portfolio.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import portfolio.backend.entity.Education;

@Repository
public interface EducationRepository extends JpaRepository<Education, Long> {

} 