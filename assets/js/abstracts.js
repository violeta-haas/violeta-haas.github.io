document.addEventListener('DOMContentLoaded', function() {
  console.log('Abstracts script loaded');
  
  const abstractHeaders = document.querySelectorAll('.abstract-header');
  console.log('Found abstract headers:', abstractHeaders.length);
  
  abstractHeaders.forEach(header => {
    header.addEventListener('click', function(e) {
      console.log('Abstract header clicked');
      e.preventDefault();
      
      const container = this.parentElement;
      const content = container.querySelector('.abstract-content');
      const toggle = this.querySelector('.abstract-toggle');
      
      console.log('Content element:', content);
      console.log('Toggle element:', toggle);
      
      // Toggle the expanded class
      content.classList.toggle('expanded');
      toggle.classList.toggle('expanded');
      
      // Update aria-expanded attribute for accessibility
      const isExpanded = content.classList.contains('expanded');
      this.setAttribute('aria-expanded', isExpanded);
      
      console.log('Expanded state:', isExpanded);
    });
  });
}); 