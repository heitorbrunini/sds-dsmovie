package com.brunini.dsmovie.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.brunini.dsmovie.dto.MovieDTO;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="tb_movie")

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of="id")	
public class Movie {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String title;
	private Double score;
	private Integer count;
	private String image;
	private String category;
	
	@OneToMany(mappedBy = "id.movie")
	private Set<Score> scores = new HashSet<>();
	
	public Movie(MovieDTO data) {
		this.id = data.id();
		this.title = data.title();
		this.score = data.score();
		this.count = data.count();
		this.image = data.image();
	}

	public Movie(Long id, String title, Double score, Integer count, String image, String category) {
		this.id = id;
		this.category = category;
		this.title = title;
		this.score = score;
		this.count = count;
		this.image = image;
	}
	
}
