package portfolio.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Project extends BaseEntity{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String title;
    
    @Column(nullable = false)
    private String category; //어떤 종류의 프로젝트인지
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    @Column
    private String imagePath;

    @Column
    private String githubUrl;
    
    @Column
    private String demoUrl;
    
    @Column
    private String technologies;

    @Column
    private Integer displayOrder;
    
    @Column
    private Boolean isActive = true; //현재 진행중인지 여부

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "profile_id", nullable = false)
    private Profile profile;
} 