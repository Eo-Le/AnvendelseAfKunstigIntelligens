# _plugins/combine_js.rb

require 'fileutils'

module Jekyll
  class CombineJs < Generator
    safe true
    priority :high

    def generate(site)
      js_dir = File.join(site.source, 'assets', 'js') # Path to your JS folder
      all_js_file = File.join(js_dir, 'all.js')      # Path to the final all.js file

      # Check if the 'assets/js/all.js' exists and delete it
      if File.exist?(all_js_file)
        File.delete(all_js_file)
      end

      # Gather all JavaScript files in the directory, excluding 'all.js'
      js_files = Dir.glob(File.join(js_dir, '*.js')).reject { |file| File.basename(file) == 'all.js' }

      # Combine the content of all JS files into 'all.js'
      combined_content = js_files.sort.map { |file| File.read(file) }.join("\n")

      # Create the all.js file with the combined content
      File.open(all_js_file, 'w') { |file| file.write(combined_content) }

      # Optionally, exclude 'all.js' from being processed further by Jekyll
      site.exclude << 'assets/js/all.js'
    end
  end
end
