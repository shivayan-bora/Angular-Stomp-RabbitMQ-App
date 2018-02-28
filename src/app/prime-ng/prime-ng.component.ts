import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/primeng';

@Component({
  template: '<p-tree [value]="files"></p-tree>'
})
export class PrimeNgComponent implements OnInit {
  files: TreeNode[];

  ngOnInit() {
    this.files = [
      {
        label: 'Folder 1',
        collapsedIcon: 'fa-folder',
        expandedIcon: 'fa-folder-open',
        children: [
          {
            label: 'Folder 2',
            collapsedIcon: 'fa-folder',
            expandedIcon: 'fa-folder-open',
            children: [
              {
                label: 'File 2',
                icon: 'fa-file-o'
              }
            ]
          },
          {
            label: 'Folder 2',
            collapsedIcon: 'fa-folder',
            expandedIcon: 'fa-folder-open'
          },
          {
            label: 'File 1',
            icon: 'fa-file-o'
          }
        ]
      }
    ];
  }
}