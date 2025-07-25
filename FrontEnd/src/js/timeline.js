/**
 * Timeline functionality
 */

function initializeTimeline() {
  const timelineItems = document.querySelectorAll('[data-timeline-item]');
  
  timelineItems.forEach(item => {
    const header = item.querySelector('.timeline-item-header');
    const detailContent = item.querySelector('.timeline-detail-content');
    
    if (header && detailContent) {
      header.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleTimelineDetail(item, header, detailContent);
      });
    }
  });
}

function toggleTimelineDetail(item, header, content) {
  const isActive = content.classList.contains('active');
  
  // Close all other timeline details
  const allTimelineItems = document.querySelectorAll('[data-timeline-item]');
  allTimelineItems.forEach(otherItem => {
    if (otherItem !== item) {
      const otherContent = otherItem.querySelector('.timeline-detail-content');
      const otherHeader = otherItem.querySelector('.timeline-item-header');
      
      if (otherContent && otherHeader) {
        otherContent.classList.remove('active');
        otherHeader.classList.remove('active');
      }
    }
  });
  
  // Toggle current timeline detail
  if (isActive) {
    content.classList.remove('active');
    header.classList.remove('active');
  } else {
    content.classList.add('active');
    header.classList.add('active');
  }
}

// Initialize timeline when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeTimeline();
}); 