package portfolio.backend.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import portfolio.backend.dto.ProfileResponse;
import portfolio.backend.entity.Profile;
import portfolio.backend.entity.TechStack;
import portfolio.backend.repository.ProfileRepository;
import portfolio.backend.repository.TechStackRepository;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class ProfileService {
    private final ProfileRepository profileRepository;
    private final TechStackRepository techStackRepository;


    public ProfileResponse getProfile() {
        Profile profile = profileRepository.findByName("권하림");
        List<TechStack> techStacks = techStackRepository.findByProfileId(profile.getId());
        List<String> stacks = new ArrayList<>();
        List<String> descriptions = new ArrayList<>();
        List<String> paths = new ArrayList<>();
        for (TechStack techstack : techStacks) {
            stacks.add(techstack.getTech());
            descriptions.add(techstack.getDescription());
            paths.add(techstack.getIconPath());
        }

        return ProfileResponse.builder()
                .name(profile.getName())
                .email(profile.getEmail())
                .github_url(profile.getGithubUrl())
                .introduction(profile.getAboutText())
                .job_type(profile.getJob())
                .location(profile.getLocation())
                .stack(stacks)
                .description(descriptions)
                .path(paths)
                .title(profile.getTitle())
                .birthday(profile.getBirthDate())
                .github_username(profile.getGithubUsername())
                .profile_path(profile.getProfileImagePath())
                .build();
    }
}
