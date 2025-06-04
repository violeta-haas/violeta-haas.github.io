document.addEventListener('DOMContentLoaded', function() {
  const abstractHeaders = document.querySelectorAll('.abstract-header');
  
  abstractHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const container = this.parentElement;
      const content = container.querySelector('.abstract-content');
      const toggle = this.querySelector('.abstract-toggle');
      
      // Toggle the expanded class
      content.classList.toggle('expanded');
      toggle.classList.toggle('expanded');
      
      // Update aria-expanded attribute for accessibility
      const isExpanded = content.classList.contains('expanded');
      this.setAttribute('aria-expanded', isExpanded);
    });
  });
}); 