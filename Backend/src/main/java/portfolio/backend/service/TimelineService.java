package portfolio.backend.service;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import portfolio.backend.dto.TimelineResponse;
import portfolio.backend.repository.EducationRepository;
import portfolio.backend.repository.ExperienceRepository;

@Service
@RequiredArgsConstructor
@Transactional
public class TimelineService {
    private final EducationRepository educationRepository;
    private final ExperienceRepository experienceRepository;


    return TimelineResponse.
}
