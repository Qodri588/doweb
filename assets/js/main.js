<script>
        document.addEventListener('DOMContentLoaded', function() {
            const tabs = document.querySelectorAll('.tab-link');
            const contents = document.querySelectorAll('.tab-content');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    tabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');

                    const target = tab.getAttribute('data-tab');
                    contents.forEach(content => {
                        content.classList.remove('active');
                        if (content.getAttribute('id') === target) {
                            content.classList.add('active');
                        }
                    });
                });
            });
        });
    </script>
    <script>
    function toggleAccordion(index) {
        const accordionItem = document.querySelectorAll('.accordion-item')[index - 1];
        accordionItem.classList.toggle('active');
        const accordionCollapse = accordionItem.querySelector('.accordion-collapse');
        if (accordionItem.classList.contains('active')) {
            accordionCollapse.style.maxHeight = accordionCollapse.scrollHeight + 'px';
        } else {
            accordionCollapse.style.maxHeight = 0;
        }
    }
</script>
