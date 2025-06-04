document.addEventListener('DOMContentLoaded', function() {
  console.log('Abstracts script loaded');
  
  // Get all abstract headers
  const abstractHeaders = document.querySelectorAll('.abstract-header');
  console.log('Found abstract headers:', abstractHeaders.length);
  
  // Add click event listener to each header
  abstractHeaders.forEach(header => {
    header.addEventListener('click', function() {
      console.log('Abstract header clicked');
      // Get the content div
      const content = this.nextElementSibling;
      // Get the toggle icon
      const toggle = this.querySelector('.abstract-toggle');
      
      console.log('Content element:', content);
      console.log('Toggle element:', toggle);
      
      // Toggle the expanded class on both content and toggle
      content.classList.toggle('expanded');
      toggle.classList.toggle('expanded');
      
      // Update aria-expanded attribute for accessibility
      const isExpanded = content.classList.contains('expanded');
      this.setAttribute('aria-expanded', isExpanded);
      
      console.log('Expanded state:', isExpanded);
    });
  });
}); 