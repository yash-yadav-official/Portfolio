package portfolio.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import portfolio.backend.entity.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

} 