#!/usr/bin/env node

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Auto-deploy started! Watching for changes...');
console.log('Press Ctrl+C to stop\n');

let timeout;
const DELAY = 5000; // Wait 5 seconds after last change before deploying

function deploy() {
  console.log('📦 Deploying changes...');
  
  exec('git add . && git commit -m "Auto-update" && git push', (error, stdout, stderr) => {
    if (error) {
      if (error.message.includes('nothing to commit')) {
        console.log('✅ No changes to deploy');
      } else {
        console.error('❌ Deploy failed:', error.message);
      }
      return;
    }
    console.log('✅ Deployed successfully!');
    console.log('🔄 Vercel is building... (check https://vercel.com/dashboard)\n');
    console.log('👀 Watching for more changes...\n');
  });
}

function watchFiles() {
  const watcher = fs.watch(
    process.cwd(),
    { recursive: true },
    (eventType, filename) => {
      // Ignore git, node_modules, and hidden files
      if (filename && 
          !filename.includes('.git') && 
          !filename.includes('node_modules') &&
          !filename.includes('.next') &&
          !filename.startsWith('.')) {
        
        console.log(`📝 Changed: ${filename}`);
        
        // Clear existing timeout
        clearTimeout(timeout);
        
        // Set new timeout - deploy after 5 seconds of no changes
        timeout = setTimeout(() => {
          deploy();
        }, DELAY);
      }
    }
  );

  // Handle graceful shutdown
  process.on('SIGINT', () => {
    console.log('\n👋 Stopping auto-deploy...');
    watcher.close();
    process.exit();
  });
}

watchFiles();